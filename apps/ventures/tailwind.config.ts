import shareConfig from '@fumy/ui/tailwind.shared';

const config = {
  presets: [shareConfig],
  theme: {
    extend: {
      keyframes: {
        rolating: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        rolating: 'rolating 6s infinite'
      },
      backgroundImage: {
        pricing: "url('/ventures/img/landing/pricing-bg.png')",
        banner_bg: "url('/ventures/img/home/banner_bg.png')"
      },
      fontSize: {
        10: ['10px', '14px'],
        11: ['11px', '15px'],
        13: ['13px', '18px'],
        14: ['14px', '20px'],
        15: ['15px', '24px'],
        16: ['16px', '1.625em'],
        17: ['17px', '26px'],
        18: ['18px', '140%'],
        20: ['20px', '100%'],
        22: ['22px', '30px'],
        24: ['24px', '1.5em'],
        32: ['32px', '110%'],
        42: ['42px', '62px'],
        48: ['48px', '1.25em'],
        54: ['54px', '110%'],
        58: ['58px', '86px'],
        60: ['60px', '1.067']
      },
      borderWidth: {
        1: '1px',
        5: '5px'
      },
      borderRadius: {
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        16: '16px',
        32: '32px',
        40: '40px',
        80: '80px',
        '25%': '25%'
      },
      colors: {
        // Mới thêm
        h_primary: '#00D094',
        h_secondary: '#00D094',
        body_color: '#00150F',
        bg_adviser: '#00150fcc',
        subtext: '#ffffff99',
        trk: '#0C263A',
        tertiary_color: '#002A1E',
        heading_title: '#6B777F',
        floating_border_color: 'rgba(0, 0, 0, 0.02)',
        floating_bg_color: 'rgba(63, 81, 75, 0.97)',
        floating_bg_color_2: 'rgba(63, 81, 75, 0.5)',
        title_color: '#FFFFFF',
        wh_color: '#1B2D29',
        card_boder: '#e6edfb1f',
        bg_color_trans: 'rgba(237, 242, 248, 0.02)',
        bg_color: 'rgba(237, 242, 248, 0.08)',
        brand_color: '#00D094'
      }
    }
  }
};

export default config;
