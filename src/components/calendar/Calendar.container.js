import { compose, withHandlers, withProps } from 'recompose';
import { Calendar as BaseCalendar } from 'react-native-calendars';

import { withUseState } from '@@hocs';
import { theme } from '@@config';

const today = Date();

const Calendar = compose(
  withUseState('selectedDay', {}),
  withHandlers({
    onDayPress: ({ onChange, setSelectedDay }) => day => {
      onChange && onChange(day);
      setSelectedDay(day);
    },
  }),
  withProps(({ selectedDay }) => ({
    minDate: today,
    ...(selectedDay && {
      markedDates: { [selectedDay.dateString]: { selected: true } },
    }),
    theme: {
      arrowColor: theme.colors.theme_black_pink.secondary,
      dotColor: theme.colors.theme_black_pink.secondary,
      selectedDayBackgroundColor: theme.colors.theme_black_pink.secondary,
      selectedDayTextColor: theme.colors.white,
      todayTextColor: theme.colors.theme_black_pink.secondary,
      textDayFontFamily: theme.text.fontFamily.REGULAR,
      textMonthFontFamily: theme.text.fontFamily.BOLD,
      textDayHeaderFontFamily: theme.text.fontFamily.REGULAR,
    },
  }))
)(BaseCalendar);

export default Calendar;
