import { Outlet, ScrollRestoration } from 'react-router-dom';
import styled from '@emotion/styled';

const Layout = styled.div`
  min-height: 100vh; // 새 단위를 지원하지 않는 소수의 브라우저를 위함
  min-height: 100svh;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0 0 20px #0000000d;
`;

export default function DefaultLayout() {
  return (
    <Layout>
      <Outlet />
      <ScrollRestoration />
    </Layout>
  );
}
