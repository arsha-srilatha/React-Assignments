import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data'
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';


function App() {
  const [displayedContent, setDisplayedContent] = useState();
  function selectHandler(selectedButton) {
    setDisplayedContent(selectedButton);
  }

  return (
    <div>
      <Header />
      <main >
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title}
            image={CORE_CONCEPTS[0].image}
            description={CORE_CONCEPTS[0].description}
          ></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
            <TabButton isSelected={displayedContent=='components'} onSelect={() => selectHandler('components')}>Components</TabButton>
            <TabButton isSelected={displayedContent=='jsx'} onSelect={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={displayedContent=='props'} onSelect={() => selectHandler('props')}>Props</TabButton>
            <TabButton isSelected={displayedContent=='state'} onSelect={() => selectHandler('state')}>State</TabButton>
            </menu>
            {!displayedContent ? <p>Please select a button</p> : null}
            {displayedContent &&
              <div id="tab-content">
              <h3>{EXAMPLES[displayedContent].title}</h3>
              <p>{EXAMPLES[displayedContent].description}</p>
              <pre>
                <code>
                {EXAMPLES[displayedContent].code}
                </code>
              </pre>
            </div> }
            
          </section>
        
       
      </main>
    </div>
  );
}

export default App;