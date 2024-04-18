import { useEffect, useState } from "react";
import Select from "react-select";


interface ControlsProps {
  onSortInput:(value:{field: string,direction: string})=>void
}

const Controls: React.FC<ControlsProps> = ({onSortInput}) => {

  const [sortingOptions, setSortingOptions] = useState({
    field: "name",
    direction: "ascending",
  });

  /**
   * Updates the sorting options with the new field value.
   *
   * @param {Object} param - An object containing the new field value.
   * @param {any} param.value - The new field value to set.
   * @return {void} This function does not return anything.
   */
  const handleSortInput = ({value}:any): void => {
    setSortingOptions({ ...sortingOptions, field:value });
  };

  /**
   * Set the sorting options with the new direction value.
   *
   * @param {any} value - The new direction value to set.
   */
  const handleDirectionInput = ({value}:any) => {
    setSortingOptions({ ...sortingOptions, direction:value });
  };

  // useEffect that would send onSortInput
  useEffect(() => {
    if(sortingOptions) {
      onSortInput(sortingOptions);
    }
  }, [sortingOptions]);

  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];



  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} inputId="sort-field" className="input" onChange={handleSortInput}/>
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={handleDirectionInput}
        />
      </div>
    </div>
  );
};

export default Controls;
