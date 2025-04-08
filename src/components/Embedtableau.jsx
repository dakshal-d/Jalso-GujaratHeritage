import React from 'react'

function embedtableau(){
    return (
        <div className="w-full h-screen p-4">
      <iframe
        src="https://public.tableau.com/views/VisualVocabulary/VisualVocabulary?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="Tableau Dashboard"
      ></iframe>
    </div>

    )
}

export default embedtableau