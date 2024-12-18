const { BLACKS, WHITES, navbarBreakpoint, defaultNavbarMode } = require('../../variables');
const { getLuminance } = require('./color');


function getTextColor(backgroundColor) {
  const luminance = getLuminance(backgroundColor);
  if (WHITES.includes(backgroundColor)) return '#000000';
  if (BLACKS.includes(backgroundColor)) return '#FFFFFF';
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

function navbarTotalItems(externalLinks, navbar, homepage) {
  let isHome = 0;
  if (homepage.endsWith('.html')) {
    isHome = 1;
  }
  return navbar.length + isHome;
  // return externalLinks.length + navbar.length + isHome;
}

function navbarHeight(externalLinks, navbar, homepage) {
  return navbarTotalItems(externalLinks, navbar, homepage) < navbarBreakpoint ? '76px' : '130px';
}

function sidebarTocPosition(externalLinks, navbar, homepage) {
  return navbarTotalItems(externalLinks, navbar, homepage) < navbarBreakpoint ? '85px' : '108px';
}

function sidebarPaddingTop(externalLinks, navbar, homepage, logoSize, navbarMode) {
  const totalItems = navbarTotalItems(externalLinks, navbar, homepage);
  if (totalItems <= 1) return '70px';
  let currentNavbar;
  if (navbarMode) {
    currentNavbar = navbarMode.toLowerCase();
  } else {
    currentNavbar = totalItems < navbarBreakpoint ? 'compact' : defaultNavbarMode;
  }
  switch (logoSize) {
    case 'large':
      return totalItems < navbarBreakpoint && currentNavbar === 'compact' ? '76px' : '78px';
    case 'medium':
      return totalItems < navbarBreakpoint && currentNavbar === 'compact' ? '66px' : '80px';
    default:
      return totalItems < navbarBreakpoint && currentNavbar === 'compact' ? '66px' : '80px';
  }
}

function sidebarMarginTop(externalLinks, navbar, homepage, logoSize) {
  const totalItems = navbarTotalItems(externalLinks, navbar, homepage);
  switch (logoSize) {
    case 'large':
      return totalItems < navbarBreakpoint ? '34px' : '36px';
    case 'medium':
      return totalItems < navbarBreakpoint ? '34px' : '34px';
    default:
      return totalItems < navbarBreakpoint ? '35px' : '34px';
  }
}

module.exports = {
  getTextColor,
  navbarTotalItems,
  navbarHeight,
  sidebarTocPosition,
  sidebarPaddingTop,
  sidebarMarginTop,
}