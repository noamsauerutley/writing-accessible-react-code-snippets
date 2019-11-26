<input 
    type="text"
    aria-label={labelText}
    // ^ "aria-label" is hyphen-case
    aria-required="true"
    // ^ "aria-required" is hyphen-case
    onClick={handleClick}
    // ^ non-aria DOM properties are still camelCase 
    value={getInput()}
    name="name"
/>