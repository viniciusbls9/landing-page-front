import type { NextPage } from 'next';
import { SectionHero, SectionAboutProject } from 'components';

const Index: NextPage = () => {
  return (
    <>
      <SectionHero />
      <SectionAboutProject image={{ url: 'https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-119699.jpg?t=st=1656066574~exp=1656067174~hmac=c37cc7a1c8fe5b6de83ea6c506f3e15dbe343850e98d0b12cc69300c2628a48d&w=1380', alternativeText: 'image' }} title="Sobre nós" description='<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>' />
    </>
  );
};

export default Index;
