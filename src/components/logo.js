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
      <h1 style={{fontSize:'1.5rem', color:'#F64F5A'}}>Emmanouil Kosmas IKE</h1>
      {/* <Image src={logo} sx={{ display: 'flex' }} alt="Emmanouil Kosmas IKE" /> */}
    </Link>
  );
}
