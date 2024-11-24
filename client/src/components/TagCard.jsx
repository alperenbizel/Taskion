import React from 'react'

function TagCard({tag,onEdit,onDelete}) {
  return (
    <div className='tag-card'>
       <h3>{tag.name}</h3>
            <p>Renk: {tag.color}</p>
            <button onClick={() => onEdit(tag)}>Düzenle</button>
            <button onClick={() => onDelete(tag._id)}>Sil</button>
        </div>
  )
}

export default TagCard