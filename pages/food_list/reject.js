import React from 'react';
import Layout from '../../components/Layout';

export default function reject() {
	return <div>this is reject</div>;
}

reject.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
