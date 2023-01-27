import React from "react";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
import { useCounter, useFetch } from "../hooks/index";

export const Layout = () => {
	const { counter, increment } = useCounter();
	const { data, isLoading, hasError, getFetch } = useFetch(
		`https://api.breakingbadquotes.xyz/v1/quotes/1`
	);

	const { author = "", quote = "" } = !!data && data.find((quote) => quote);
	const onNextQuote = () => {
		increment(1);
		getFetch();
	};

	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			{isLoading ? (
				<LoadingQuote></LoadingQuote>
			) : (
				<Quote author={author} quote={quote}></Quote>
			)}

			<button
				disabled={isLoading}
				className="btn btn-primary"
				onClick={onNextQuote}
			>
				Nex quote: {counter}
			</button>
		</>
	);
};
