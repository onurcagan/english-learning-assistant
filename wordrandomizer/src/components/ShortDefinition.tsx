// export const ShortDefinition = () => {
//   return (
//     <ol key={innerIndex}>
//       {(index === 0 && innerIndex === 0) || !testDictResponse(metaId) ? <></> : <hr />}
//       <li key={innerIndex}>
//         {testDictResponse(metaId)
//           ? returnDefinitionIfNotEmpty(shortDefinition)
//           : index === 0 && innerIndex === 0 && <>This word doesn't exist in the dictionary.</>}
//       </li>
//       {testDictResponse(metaId) ? <Example definition={definitions} exampleIndex={innerIndex} /> : <></>}
//     </ol>
//   )
// }
