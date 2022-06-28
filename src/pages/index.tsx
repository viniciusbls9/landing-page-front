import type { NextPage } from 'next';
import { SectionHero, SectionAbout, SectionServices, SectionReviews } from 'components';

const Index: NextPage = () => {
  const servicesMock = [
    {icon: {
        src: 'https://cdn-icons-png.flaticon.com/512/141/141927.png',
        alternativeText: 'work icon',
        width: '45',
        height: '45'
      },
      children: '<p><h3>Title</h3> description</p>'
    },
    {icon: {
        src: 'https://cdn-icons-png.flaticon.com/512/141/141927.png',
        alternativeText: 'work icon',
        width: '45',
        height: '45'
      },
      children: '<h3>Title2</h3><p>description2</p>'
    },
  {icon: {
      src: 'https://cdn-icons-png.flaticon.com/512/141/141927.png',
      alternativeText: 'work icon',
      width: '45',
      height: '45'
    },
    children: '<h3>Title2</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>'
  }
  ]

  const reviewsMock = [
    { name: 'John Doe', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'John Doe', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'John Doe', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'John Doe', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'John Doe', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'John Doe', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },

  ]

  return (
    <>
      <SectionHero
        logo={{
          url: 'https://preview.uideck.com/items/freelancer/assets/images/logo.svg',
          alternativeText: 'alt logo'
        }}
        header={{
          title: 'Title',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
          button: { url: '#', label: 'Clique aqui' },
          image: {
            url: 'https://img.freepik.com/free-photo/happy-smiling-curly-haired-young-woman-types-message-mobile-phone-looks-with-glad-expression-display-wears-grey-jacket_273609-43347.jpg?t=st=1655809552~exp=1655810152~hmac=9928afd61df00ef2092f316eaba83fab7b9571348ea5f214418a64f7cb463593&w=1380',
            alternativeText: 'image alt'
          }
        }}
      />
      <SectionAbout
        image={{
          url: 'https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-119699.jpg?t=st=1656066574~exp=1656067174~hmac=c37cc7a1c8fe5b6de83ea6c506f3e15dbe343850e98d0b12cc69300c2628a48d&w=1380',
          alternativeText: 'image'
        }}
        button={{ href: '#', label: 'Entre em contato' }}
        title="Sobre nós"
        description='<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>'
      />
      <SectionServices services={servicesMock} />

      <SectionReviews title='Depoimentos' reviews={reviewsMock} />
    </>
  );
};

export default Index;
