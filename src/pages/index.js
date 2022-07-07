import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components';
import { dataList, imageList } from '../constants/mock';
import { MainLayout } from '../layout/Main';

export default function Home() {
  return (
    <MainLayout>
      <div className='relative'>
        <Image
          src='/assets/main/jpg/banner-1.jpg'
          alt='banner-1'
          layout='responsive'
          height={300}
          width={1000}
        />
      </div>
      <Layout.Container>
        <Layout.Section className='pt-2 md:pt-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10'>
            <div className='w-full h-10 md:h-14 bg-teal-400'>
              <Link href='https://www.wg-88.vip/?pid=zbnin989'>
                <a>
                  <div className='w-full h-full bg-btn-1 bg-contain text-black flex justify-center items-center'>
                    加入我們
                  </div>
                </a>
              </Link>
            </div>
            <div className='w-full h-10 md:h-14 bg-yellow-700 rounded-md'>
              <Link href='https://www.wg-88.vip/?pid=zbnin989'>
                <a>
                  <div className='w-full h-full flex justify-center items-center'>申請優惠 🙂</div>
                </a>
              </Link>
            </div>
            <div className='w-full h-10 md:h-14 bg-orange-200 rounded-md'>
              <Link href='https://t.me/kalok990'>
                <a>
                  <div className='w-full h-full text-orange-500 flex justify-center items-center'>
                    加入我們 💬
                  </div>
                </a>
              </Link>
            </div>
            <div className='w-full h-10 md:h-14 bg-green-700 rounded-full'>
              <Link href='https://www.hkhk22.com/web/home-page'>
                <a>
                  <div className='w-full h-full text-black flex justify-center items-center'>
                    加入我們
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </Layout.Section>
        <Layout.Section>
          <div className='w-full h-[500px] relative'>
            <iframe
              src='https://video.wixstatic.com/video/e35fe6_b12dd32897f84ca9b5ceb552191df947/1080p/mp4/file.mp4?controls=0'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
              allowFullScreen={false}
              className='w-full h-full'
              width='1280'
              height='720'
            />
          </div>
          <div className='flex justify-center'>
            <Link href='https://www.wg-88.vip/?pid=rhfsh110'>
              <a className='px-20 py-5 border-2 border-amber-600 text-amber-600 rounded-full'>
                遊戲 ⬇️
              </a>
            </Link>
          </div>
        </Layout.Section>
        <Layout.Section>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10'>
            {dataList.map((load) => (
              <div key={load.id}>
                <div className='relative'>
                  <Image
                    src={load.image}
                    alt={load.btnTitle}
                    layout='responsive'
                    height={800}
                    width={800}
                  />
                </div>
                <div className='flex justify-center'>
                  <Link href={load.linkTo}>
                    <a>
                      <div className='px-8 py-3 border-2 border-blue-300 text-blue-300'>
                        {load.btnTitle}
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Layout.Section>
        <Layout.Section className='pt-20'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            {imageList.map((load) => (
              <div className='relative' key={load.id}>
                <Image
                  src={load.image}
                  alt={`banner-${load.id}`}
                  layout='responsive'
                  height={280}
                  width={800}
                />
              </div>
            ))}
          </div>
        </Layout.Section>
      </Layout.Container>
    </MainLayout>
  );
}
