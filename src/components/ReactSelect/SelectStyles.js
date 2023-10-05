import { theme } from 'styles/theme';
const { colors, borderRadius } = theme;

export const makeStyles = (style) => ({
  //
  container: (baseStyles) => ({
    ...baseStyles,
    // backgroundColor: 'beige', // for testing
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    ...style?.container,
  }),

  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: colors.bgLight,
    // border: '1px solid',
    // borderColor: state.isFocused ? 'lightGray' : 'transparent',
    color: colors.primaryText,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '111.111%',
    borderRadius: borderRadius.regular,
    width: '100%',
    // marginTop: 0,
    // minHeight: 'auto',
    // verticalAlign: 'text-top',
    cursor: state.selectProps.isSearchable ? 'text' : 'pointer',
    display: 'flex',
    gap: 8,
    padding: '14px 18px',
    ...style?.control,
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: 'currentColor',
    width: '100%',
    ...style?.singleValue,
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: colors.primaryText,
    transition: 'transform 200ms ease-out',
    transform: state.selectProps.menuIsOpen ? 'rotate(0.5turn)' : 'unset',
    cursor: 'pointer',
    ...style?.dropdownIndicator,
  }),

  // input: (baseStyles) => ({
  //   ...baseStyles,
  //   color: 'red',
  //   padding: 0,
  //   ...style?.input,
  // }),
  //   // loadingIndicator: (baseStyles) => ({...baseStyles}),
  //   // loadingMessage: (baseStyles) => ({...baseStyles}),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'white',
    marginTop: 4,
    width: '100%',
    // width: 'max-content',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    borderRadius: borderRadius.regular,
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    padding: '14px 8px 14px 18px',
    // maxHeight:
    ...style?.menu,
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 6,
    ...style?.menuList,
  }),

  //   // noOptionsMessage: (baseStyles) => ({...baseStyles}),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? colors.primaryText : colors.primaryText20,
    fontSize: 16,
    lineHeight: '125%',
    whiteSpace: 'nowrap',
    ...style?.option,
  }),

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: colors.primaryText,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '111.111%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),

  // valueContainer: (baseStyles) => ({
  //   ...baseStyles,
  //   // backgroundColor: 'yellow',
  //   // paddingLeft: variant === 'addrecipe' ? 12 : 0,
  //   //     padding: 0,
  //   // marginTop: -4,
  // }),
});
