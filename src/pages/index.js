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
          src='https://static.wixstatic.com/media/e35fe6_e5e18a07ac9f41a6b11987628aa1c168~mv2.jpeg/v1/fill/w_1280,h_400,al_c,q_85,enc_auto/wgban.jpeg'
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
              <button type='button' className='w-full h-full bg-btn-1 bg-contain text-black'>
                加入我們
              </button>
            </div>
            <div className='w-full h-10 md:h-14 bg-yellow-700 rounded-md'>
              <button type='button' className='w-full h-full'>
                申請優惠
              </button>
            </div>
            <div className='w-full h-10 md:h-14 bg-orange-200 rounded-md'>
              <button type='button' className='w-full h-full text-orange-500'>
                加入我們
              </button>
            </div>
            <div className='w-full h-10 md:h-14 bg-green-700 rounded-full'>
              <button type='button' className='w-full h-full text-black'>
                加入我們
              </button>
            </div>
          </div>
        </Layout.Section>
        <Layout.Section>
          <div className='w-full h-[500px] relative'>
            <iframe
              src='https://www.youtube.com/embed/CI4Q3mtA0tc?controls=0'
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
            <Link href='/'>
              <a className='px-20 py-5 border-2 border-amber-600 text-amber-600 rounded-full'>
                遊戲
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
