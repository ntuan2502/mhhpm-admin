import React from 'react';
import Layout from '../../components/Layout';

export default function done() {
	return <div>this is done</div>;
}

done.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};