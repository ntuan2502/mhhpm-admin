import React from 'react';
import Layout from '../../components/Layout';

export default function NullPage() {
	return <div>this is Null</div>;
}

NullPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
