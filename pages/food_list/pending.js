import React from 'react';
import Layout from '../../components/Layout';

export default function pending() {
	return <div>this is pending</div>;
}

pending.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
