/* eslint-disable camelcase */
import { compose, withHandlers, withProps } from 'recompose';
import { Calendar as BaseCalendar } from 'react-native-calendars';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import {
  theme,
  themeFuchsia,
  themePurple,
  themeAqua,
  themeBlue,
  themeFire,
  themeLila,
} from '@@config';
import * as C from '@@utils/constants';
import { preferences } from '@@store/modules';

const themeMapping = {
  [C.THEME_COLORS.FUCHSIA]: themeFuchsia,
  [C.THEME_COLORS.PURPLE]: themePurple,
  [C.THEME_COLORS.AQUA]: themeAqua,
  [C.THEME_COLORS.BLUE]: themeBlue,
  [C.THEME_COLORS.FIRE]: themeFire,
  [C.THEME_COLORS.LILA]: themeLila,
};

const Calendar = compose(
  withUseState('selectedDay', ({ selectedDay = {} }) => selectedDay),
  withHandlers({
    onDayPress: ({ onChange, setSelectedDay }) => day => {
      onChange && onChange(day);
      setSelectedDay(day);
    },
  }),
  connect(state => ({
    themeName: preferences.selectors.getTheme(state),
  })),
  withProps(({ selectedDay, minDate, themeName }) => ({
    ...(selectedDay && {
      markedDates: { [selectedDay.dateString]: { selected: true } },
    }),
    ...(minDate && { minDate }),
    theme: {
      arrowColor: themeMapping[themeName].theme_colors.secondary,
      dotColor: themeMapping[themeName].theme_colors.secondary,
      selectedDayBackgroundColor:
        themeMapping[themeName].theme_colors.secondary,
      selectedDayTextColor: theme.colors.white,
      todayTextColor: themeMapping[themeName].theme_colors.secondary,
      textDayFontFamily: theme.text.fontFamily.REGULAR,
      textMonthFontFamily: theme.text.fontFamily.BOLD,
      textDayHeaderFontFamily: theme.text.fontFamily.REGULAR,
    },
  }))
)(BaseCalendar);

export default Calendar;
