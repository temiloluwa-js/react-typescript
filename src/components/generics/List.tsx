type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

export const List = <T extends {id: number}>({items, onClick}: ListProps<T>) => {
  return (
    <div>
      <h2>Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}></div>
        )
      })}
    </div>
  )
} 