import Head from 'next/head';

type MetaProps = { title?: string };

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title && `${title} | `}COVID-19 Statistic</title>
    </Head>
  );
};

export default Meta;
