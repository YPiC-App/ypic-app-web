export const SHOW_SITE_OVERLAY = '@SITE/SHOW_SITE_OVERLAY';

export const showSiteOverlay = (showOverlay, overlayText = 'Loading...') => ({
  type: SHOW_SITE_OVERLAY,
  payload: {
    showOverlay,
    overlayText,
  },
});
