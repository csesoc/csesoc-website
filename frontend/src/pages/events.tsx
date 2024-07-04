import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import axios from 'axios';

export default function EventsPage() {
  const pingBackend = async () => {
    axios
      .get(
        `http://${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/ping`
      )
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <Layout>
      <PageTitle title="EVENTS" />
      <button onClick={() => pingBackend()}>Ping backend</button>
    </Layout>
  );
}
