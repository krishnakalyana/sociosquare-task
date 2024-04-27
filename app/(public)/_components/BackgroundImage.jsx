import Image from 'next/image'

export default function ImageBackground({ src, alt }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    >
      <Image src={src} layout='fill' objectFit='cover' alt={alt} />
    </div>
  )
}
