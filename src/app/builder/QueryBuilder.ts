import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // search by title or content
  search(searchableFields: string[]) {
    const search = this?.query?.search;
    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: search, $options: "i" },
            } as FilterQuery<T>)
        ),
      });
    }

    return this;
  }
  // sort by fields
  sortBy() {
    const sortBy =
      (this?.query?.sortBy as string)?.split(",")?.join(" ") || "-__v";
    this.modelQuery = this.modelQuery.select(sortBy);
    return this;
  }

  // sort by ascending or descending on createdAt
  sortOrder() {
    let sortValue = "-createdAt";
    const sortOrder = this?.query?.sortOrder;
    if (typeof sortOrder === "string") {
      const lowerCaseSortOrder = sortOrder.toLowerCase();

      if (lowerCaseSortOrder === "asc") {
        sortValue = "createdAt"; // Ascending order
      } else if (lowerCaseSortOrder === "desc") {
        sortValue = "-createdAt"; // Descending order
      }
    }
    this.modelQuery = this.modelQuery.sort(sortValue as string);
    return this;
  }

  // filter by author id
  filter() {
    const queryObj = { ...this.query };
    const excludeFields = ["search", "sortBy", "sortOrder"];
    excludeFields.forEach((field) => delete queryObj[field]);
    if (this.query.filter) {
      this.modelQuery = this.modelQuery.find({ author: this.query.filter });
      return this;
    }
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }
}

export default QueryBuilder;
