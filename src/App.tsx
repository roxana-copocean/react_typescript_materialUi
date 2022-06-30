import { Email } from '@mui/icons-material';
import React, { useState } from 'react';
import { generate } from 'shortid';
import { MyForm } from './MyForm';
import { MyTable } from './MyTable';

const App = () => {
	const [ rows, setRows ] = useState([
		{
			id: '2So-re3TE',
			firstName: 'Giorgiana',
			lastName: 'Kisha',
			email: 'george.bfhfjr@gmail.com'
		}
	]);
	return (
		<div style={{ textAlign: 'center' }}>
			<MyForm
				onSubmit={(data) => {
					setRows((currentRows) => [ { id: generate(), ...data }, ...currentRows ]);
				}}
			/>
			<MyTable rows={rows} />
		</div>
	);
};

export default App;
