import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import { useTranslatedConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';
import LanguagePopover from '../common/language-popover';
import { localStorageGetItem } from 'src/utils/storage-available';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};


export default function Header({ headerOnDark }: Props) {
  const settings = localStorageGetItem('settings') || '{}';

  const settingsJson = JSON.parse(settings)

  const darkModeOn = settingsJson?.themeMode == 'dark' ? true : false

  console.log("darkModeOn in header ==> ", darkModeOn)

  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const { navConfig } = useTranslatedConfig();

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        {/* <Logo /> */}
        {darkModeOn && <img width={50} height={50} alt='Roberto Beach Light Logo' src="/assets/logo/RBLightLogo.png"/>}
        {!darkModeOn && <img width={50} height={50} alt='Roberto Beach Dark Logo' src="/assets/logo/RBDarkLogo.png"/>}
        {/* <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener">
          <Label
            color="info"
            sx={{
              ml: 0.5,
              px: 0.5,
              top: -14,
              left: 60,
              height: 20,
              fontSize: 11,
              cursor: 'pointer',
              position: 'absolute',
            }}
          >
            v2.4.0
          </Label>
        </Link> */}
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            height: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <NavDesktop data={navConfig} />
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
      </>

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        <Stack spacing={1} direction="row" alignItems="center">
          <LanguagePopover />
          <Searchbar />

          <SettingsButton />
        </Stack>

        {/* <Button
          variant="contained"
          color="inherit"
          href={paths.zoneStore}
          target="_blank"
          rel="noopener"
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          Buy Now
        </Button> */}
      </Stack>

      {!mdUp && <NavMobile data={navConfig} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}
