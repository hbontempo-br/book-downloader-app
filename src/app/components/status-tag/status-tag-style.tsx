import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { StatusTagProps } from './status-tag-types';

export const statusTagStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: (props: StatusTagProps): string => props.backgroundColor,
    display: 'inline-flex',
    flexDirection: 'row',
    height: '24px',
    borderRadius: '12px',
    justifyContent: 'left',
    padding: '10px',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: (props: StatusTagProps): string => props.color,
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    marginRight: '2px',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: 900,
    color: (props: StatusTagProps): string => props.color,
  },
}));
