import { createRef, useEffect, useState } from "react";
import "./App.scss";

import { FaFilter } from "react-icons/fa6";

import { v4 } from "uuid";

function FilterTh({ filterOptions, children }) {
  const [showFiterMenu, setShowFiterMenu] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [filterOpts, setFilterOptions] = useState(filterOptions);

  const [uniqueId, setUniqueId] = useState(v4());

  useEffect(() => {
    document.addEventListener("click", function handleFilterMenu(e) {
      let eid = e.target?.getAttribute("uid");
      if (eid !== uniqueId) {
        setShowFiterMenu(false);
      }
    });
  }, [uniqueId]);

  useEffect(() => {
    if (searchKey) {
      const filtered_opts = filterOptions.filter((opt) => {
        return opt?.toLowerCase()?.includes(searchKey?.toLowerCase());
      });
      setFilterOptions(filtered_opts);
    } else {
      setFilterOptions(filterOptions);
    }
  }, [searchKey]);

  return (
    <th>
      {children}
      <span>
        <FaFilter />
      </span>
      <div
        className="filter_cover"
        uid={uniqueId}
        onClick={() => setShowFiterMenu(!showFiterMenu)}
      ></div>
      {filterOptions && showFiterMenu && (
        <div className="filter_wrpr" uid={uniqueId}>
          <div className="filter_menu" uid={uniqueId}>
            {filterOpts?.map((item) => {
              return (
                <div className="filter_item" uid={uniqueId}>
                  <input uid={uniqueId} type="checkbox" /> {item}
                </div>
              );
            })}
          </div>
          <div>
            <div className="filter_apply_btn">Apply</div>
            <div className="filter_search" uid={uniqueId}>
              <input
                uid={uniqueId}
                onChange={(e) => setSearchKey(e.target.value)}
                type="text"
                className="filter_search_fld"
                placeholder="search..."
              />
            </div>
          </div>
        </div>
      )}
    </th>
  );
}

function App() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <FilterTh
              filterOptions={[
                "Ratings Ratings Ratings Ratings Ratings Ratings",
                "Counts",
                "Least performance",
                "Best performance",
                "Inactive",
                "Ratings",
                "Counts",
                "Least performance",
                "Best performance",
                "Inactive",
                "Ratings",
                "Counts",
                "Least performance",
                "Best performance",
                "Inactive",
              ]}
            >
              Id
            </FilterTh>
            <FilterTh
              filterOptions={[
                "AAA",
                "BBB",
                "CCC ",
                "DDD",
                "EEE",
                "AAA",
                "BBB",
                "CCC ",
                "DDD",
                "EEE",
                "WQEQWRWRQWRTRW",
              ]}
            >
              model_uid
            </FilterTh>
            <FilterTh filterOptions={["aaa", "bbb", "ccc ", "ddd", "eee"]}>
              hsi_input
            </FilterTh>
            <th>input_parameters</th>
            <th>mip_output</th>
            <th>remarks</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {Array(12)
            .fill("")
            .map(() => {
              return (
                <tr>
                  <td>test data</td>
                  <td>test data</td>
                  <td>test data</td>
                  <td>test data</td>
                  <td>test data</td>
                  <td>test data</td>
                  <td>2023 11 12 IST</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
