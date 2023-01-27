import React, { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
	console.log("ren");
	return (
		<button
			className="btn btn-primary"
			onClick={() => {
				increment(5);
			}}
		>
			Incrementar
		</button>
	);
});
