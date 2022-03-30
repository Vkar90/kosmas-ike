/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.svg';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <h3 style={{color: '#BC343E'}}>Emmanouil Kosmas IKE</h3>
    </Link>
  );
}
