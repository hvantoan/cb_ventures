export default function Partner() {
  return (
    <div className="relative min-h-[calc(100vh - 72px)] w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-[#01291e] z-[-1] " />
      <div className='flex justify-center'>
        <div className="container flex justify-between px-20 py-6">
          <a className="text-secondary-hbr text-4xl text-bold">coinbase</a>
          <a href="" className="flex justify-center items-center gap-4">
            <div>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo.png"
                alt="external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo"
              />
            </div>
            <p className="text-success-hbr text-3xl content-center">Spotify</p>
          </a>
          <a href="" className="flex justify-center items-center gap-4">
            <div>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-color-tal-revivo.png"
                alt="external-slack-replace-email-text-messaging-and-instant-messaging-for-your-team-logo-color-tal-revivo"
              />
            </div>
            <p className="text-pink text-3xl content-center">Slack</p>
          </a>
          <a href="" className="flex justify-center items-center gap-4">
            <div>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-Dropbox-logos-and-brands-those-icons-flat-those-icons.png"
                alt="external-Dropbox-logos-and-brands-those-icons-flat-those-icons"
              />
            </div>
            <p className="text-pink text-3xl ml-[5px] content-center">Dropbox</p>
          </a>
          <a className="text-pink text-4xl text-bold content-center">
            <img alt="" src="/img/icon/webflow-icon.png" width={100} height={60} className="scale-150"></img>
          </a>
          <a className="text-link text-4xl text-bold content-center">zoom</a>
        </div>
      </div>
    </div>
  )
}
