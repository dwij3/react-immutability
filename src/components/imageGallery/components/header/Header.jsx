export const Header = ({ title, onReverse, onSort }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        borderBottom: '1px solid #ccc',
        zIndex: '1000',
        backgroundColor: '#fdfaf6',
        padding: '0 16px'
      }}
    >
      <h1 style={{ flex: 1 }}>
        {title}
      </h1>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flex: 'none'
        }}
      >
        <button
          data-testid='reverse'
          onClick={onReverse}
          style={{
            border: '1px solid transparent',
            borderRadius: '8px',
            padding: '8px 16px',
            backgroundColor: '#0E61F6',
            color: 'white',
            cursor: 'pointer',
            minWidth: '90px',
            flex: 'none',
          }}
        >
          Reverse
        </button>
        <button
          data-testid='sort'
          onClick={onSort}
          style={{
            border: '1px solid transparent',
            borderRadius: '8px',
            padding: '8px 16px',
            backgroundColor: '#0E61F6',
            color: 'white',
            cursor: 'pointer',
            flex: 'none',
            minWidth: '90px',
          }}
        >
          Sort
        </button>
      </div>
    </div>
  );
};
