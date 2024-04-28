import Image from 'next/image'

export default function LoginPoster() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={'assets/LoginImage.svg'}
        layout='fill'
        objectFit='cover'
        alt={'Login Image'}
      />
    </div>
  )
}
