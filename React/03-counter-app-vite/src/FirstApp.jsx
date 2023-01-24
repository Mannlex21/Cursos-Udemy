import React from "react";
import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
	return (
		<>
			<h1>{title}</h1>
			<p>{subTitle + 1}</p>
		</>
	);
};
//COn esto lanza error si el prop es de diferente tipo y arroja error en console y en test
// esto se inicializa despues del componente
FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.number.isRequired,
};

//Con esto se agregan valores por defecto, incluso crea el prop en caso de no tenerlo inicializado
FirstApp.defaultProps = {
	title: "No hay titulo",
	subTitle: 0,
};
