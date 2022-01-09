import { useState } from 'react';

export default function Header() {
	const [showMe, setShowMe] = useState(false);
	function toggle() {
		setShowMe(!showMe);
	}
	return (
		<>
			<button onClick={toggle}>Toggle Subjects</button>
			{/*The bottom code should toggle on and off when the button is pressed*/}
			<div
				style={{
					display: showMe ? 'block' : 'none',
				}}
			>
				This should toggle my display
			</div>
		</>
	);
}
