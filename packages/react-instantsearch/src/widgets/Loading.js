import connectLoading from '../connectors/connectLoading.js';
import LoadingComponent from '../components/Loading.js';

/**
 * Loading is conditionnal component to render its child when the results
 * are being fetched from Algolia. This widget only accepts a single child
 * element.
 * @name Loading
 * @kind component
 * @category widget
 * @propType {Element} children - the single element that should be display
 * during loading
 * @example
 * import React from 'react';
 *
 * import {
 *   InstantSearch,
 *   Hits,
 * } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       className="container-fluid"
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <Loading>
 *        <div>
 *          <p>Loading results</p>
 *        </div>
 *       </Loading>
 *     </InstantSearch>
 *   );
 * }
 */
export default connectLoading(LoadingComponent);