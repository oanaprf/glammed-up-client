/* eslint-disable camelcase */
import { compose, withHandlers, withProps } from 'recompose';
import { Calendar as BaseCalendar } from 'react-native-calendars';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { theme, theme_purple } from '@@config';
import { preferences } from '@@store/modules';

const themeMapping = {
  FUCHSIA: theme,
  PURPLE: theme_purple,
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
      arrowColor: themeMapping[themeName].colors.theme_black_pink.secondary,
      dotColor: themeMapping[themeName].colors.theme_black_pink.secondary,
      selectedDayBackgroundColor:
        themeMapping[themeName].colors.theme_black_pink.secondary,
      selectedDayTextColor: theme.colors.white,
      todayTextColor: themeMapping[themeName].colors.theme_black_pink.secondary,
      textDayFontFamily: theme.text.fontFamily.REGULAR,
      textMonthFontFamily: theme.text.fontFamily.BOLD,
      textDayHeaderFontFamily: theme.text.fontFamily.REGULAR,
    },
  }))
)(BaseCalendar);

export default Calendar;
