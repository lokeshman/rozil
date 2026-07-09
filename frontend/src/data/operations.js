export const operationMetrics = [
  {
    id: 'uptime',
    title: 'SYSTEM UPTIME',
    value: '99.999%',
    icon: 'bolt',
    status: 'ONLINE',
    theme: 'nightvision-neon',
    progress: '99.9%',
    description: 'animate-pulse shadow-[0_0_8px_#00FF41]'
  },
  {
    id: 'reach',
    title: 'NETWORK REACH',
    value: '4.2M+',
    icon: 'public',
    status: 'SCALING',
    theme: 'terminal-cyan',
    isBars: true,
  },
  {
    id: 'growth',
    title: 'AGGREGATE GROWTH',
    value: '154.2%',
    icon: 'trending_up',
    status: '+182%',
    theme: 'nightvision-neon',
    customBottom: 'Velocity: High Priority'
  },
  {
    id: 'risks',
    title: 'RISK DETECTION',
    value: '0.0%',
    icon: 'privacy',
    status: 'SHIELD_UP',
    theme: 'alert-red',
    progress: '100%'
  }
];

export const operationVentures = [
  {
    id: 'nv_proto',
    title: 'NightVision',
    badge: 'NV_PROTO',
    theme: 'nightvision-neon',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6n3fDlv3QXxUisGVNHiYbAwALRcNThn4p2h57KXcQRaxicaAjQkEChlZEdi73KKAPPnx-vZj9_Cq6U14Sh_CF0lPKeBv83f69bQs7NsIzu9ekA8fdviUBq44CCTGm8C-OGEx_tSDmnmNL4iiYBHz0Oc5FVwvQY3sve4-_FkcpnwzCprMijPMT0iv7XBkc1X_5BOz4zDCWn_xWadM_JVGZQxoIFkKWXHxJUgMrUvPQVSsUElh0_GtkL164o9TrnN7q1g',
    stats: {
      UPTIME: '99.8%',
      GROWTH: '+210%',
      ACTIVE_LOCATIONS: '1,204'
    },
    actionText: 'VIEW_NODES'
  },
  {
    id: 'rt_dream',
    title: 'RT Dream State',
    badge: 'RT_DREAM',
    theme: 'terminal-cyan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYS5-Neu747lGq-ii5VGIwAaOq38ispwwUFKxSWwaS4TidBSMkKIqxQh3YmEnm7C437IgAPkBJawaI6SaRgjjyRdyuk_ty066RVv8sPHQw5tpSFj-1KtCYGYLJDUSGjRc0lgR_ia7A8vQt7gPPuwLf4d6G1FVzwcBZKtn5AmMagfUyRS62Gh_Hn6V3X67XLv-IL4-HrwtY4-gGtbSFtaxdgOS8usvtv_Vp13bCi0LLY2Hx1TGwTAwq4e91aV_vNvU4Nw',
    stats: {
      UPTIME: '100.0%',
      GROWTH: '+156%',
      ACTIVE_LOCATIONS: '842'
    },
    actionText: 'MANAGE_DREAMS'
  }
];
