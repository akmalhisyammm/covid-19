import Head from 'next/head';

type MetaProps = { title?: string };

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title && `${title} | `}COVID-19 Statistic</title>
      <link rel="icon" href="https://via.placeholder.com/150" />
    </Head>
  );
};

export default Meta;
