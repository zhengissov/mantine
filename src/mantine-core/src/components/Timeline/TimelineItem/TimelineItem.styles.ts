import { createMemoStyles, getThemeColor, MantineTheme } from '../../../theme';

interface TimelineItemStyles {
  theme: MantineTheme;
  bulletSize: number;
  color: string;
  align: 'right' | 'left';
  lineVariant: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
}

export default createMemoStyles({
  itemBody: {},
  itemContent: {},

  item: ({ theme, align, lineVariant, lineWidth }: TimelineItemStyles) => ({
    position: 'relative',
    boxSizing: 'border-box',
    color: theme.colors.gray[7],
    paddingLeft: align === 'left' ? theme.spacing.xl : 0,
    paddingRight: align === 'right' ? theme.spacing.xl : 0,
    textAlign: align,

    '&:not(:last-of-type)::before': {
      display: 'block',
    },

    '&:not(:first-of-type)': {
      marginTop: theme.spacing.xl,
    },

    '&::before': {
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: align === 'left' ? -lineWidth : 'auto',
      right: align === 'right' ? -lineWidth : 'auto',
      bottom: -theme.spacing.xl,
      borderLeft: `${lineWidth}px ${lineVariant} ${theme.colors.gray[3]}`,
      content: '""',
      display: 'none',
    },
  }),

  itemLineActive: ({ theme, color }: TimelineItemStyles) => ({
    '&::before': {
      borderLeftColor: getThemeColor({ theme, color, shade: 6 }),
    },
  }),

  itemActive: ({ theme, color }: TimelineItemStyles) => ({
    '& $itemBullet': {
      borderColor: getThemeColor({ theme, color, shade: 6 }),
    },
  }),

  itemBullet: ({ theme, bulletSize, align, lineWidth }: TimelineItemStyles) => ({
    boxSizing: 'border-box',
    width: bulletSize,
    height: bulletSize,
    borderRadius: bulletSize,
    border: `${lineWidth}px solid ${theme.colors.gray[3]}`,
    backgroundColor: theme.white,
    position: 'absolute',
    top: 0,
    left: align === 'left' ? -bulletSize / 2 - lineWidth / 2 : 'auto',
    right: align === 'right' ? -bulletSize / 2 - lineWidth / 2 : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
  }),

  itemBulletWithChild: ({ theme, color }: TimelineItemStyles) => ({
    borderWidth: 1,
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
  }),

  itemTitle: ({ theme, align }: TimelineItemStyles) => ({
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: theme.spacing.xs / 2,
    textAlign: align,
  }),
});
