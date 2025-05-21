import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"

import { Check, ChevronsUpDown } from "lucide-react"
const ArticleTable = ({ caption, articles }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedArticles, setSortedArticles] = useState(articles);
  const [createdOnSortOrder, setCreatedOnSortOrder] = useState(null);
  const [loading, setLoading] = useState(false);





  // format date
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    });
  };


  // Update sorting logic to handle both words and createdOn
  useEffect(() => {
    let sorted = [...articles];
    if (createdOnSortOrder) {
      sorted.sort((a, b) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return createdOnSortOrder === "asc"
          ? dateA - dateB
          : dateB - dateA;
      });
    } else if (sortOrder) {
      sorted.sort((a, b) =>
        sortOrder === "asc" ? a.words - b.words : b.words - a.words
      );
    }
    setSortedArticles(sorted);
  }, [articles, sortOrder, createdOnSortOrder]);

  const handleSort = () => {
    setLoading(true);
    setSortOrder(!sortOrder ? "asc" : sortOrder === "asc" ? "desc" : "asc");
    setCreatedOnSortOrder(null);
    setTimeout(() => setLoading(false), 500);
  };

  // Handle sort for createdOn
  const handleCreatedOnSort = () => {
    setLoading(true);
    setCreatedOnSortOrder(
      !createdOnSortOrder
        ? "asc"
        : createdOnSortOrder === "asc"
          ? "desc"
          : "asc"
    );
    setSortOrder(null);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <Table>
      <TableCaption className="text-left text-black pl-2">{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className=""><Checkbox /></TableHead>
          <TableHead className="w-[100px]">Article Title</TableHead>
          <TableHead>Keyword</TableHead>
          <TableHead
            className="cursor-pointer select-none"
            onClick={handleSort}
          >
            <ChevronsUpDown size={"15px"} className="inline-block " /> Words
          </TableHead>
          <TableHead
            className="text-right w-[120px] cursor-pointer select-none"
            onClick={handleCreatedOnSort}
          >
            <ChevronsUpDown size={"15px"} className="inline-block" /> Created
          </TableHead>
          <TableHead className="text-right">Action</TableHead>
          <TableHead className="text-right">Publish</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <div className="flex justify-center items-center py-10 ]">Loading...</div>
        ) : sortedArticles?.map((article) => (
          <TableRow key={article.id}>
            <TableCell className="font-medium"><Checkbox /></TableCell>
            <TableCell className="font-medium">{article.title}</TableCell>
            <TableCell>{article.keyword}</TableCell>
            <TableCell>{article.words}</TableCell>
            <TableCell className="text-right">{formatDate(article.createdOn)}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" className="text-blue-500 ">{article.action}</Button>
            </TableCell>
            <TableCell className="text-right">
              {article.publish ? "Yes" : "No"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ArticleTable;