import { useState } from "react";
import { Checkbox } from "./components/ui/checkbox";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Card } from "./components/ui/card";

export function App() {
  interface Checkbox {
    id: string;
    label: string;
    checked: boolean;
  }
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckboxes((checkboxes) =>
      checkboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked } : checkbox
      )
    );
  };

  const handleSaveChanges = () => {
    setCheckboxes([
      ...checkboxes,
      { id: `checkbox-${checkboxes.length + 1}`, label: inputValue, checked: false },
    ]);
    setInputValue("");

  };


  return (
    <div className="flex p-6 mx-auto flex-col justify-center items-center gap-2 h-screen bg-slate-300">
    <Card className="p-4 w-96 h-56">
    <h1 className="text-2xl text-center">TaskDo</h1>
    <Dialog>
      <DialogTrigger asChild className="flex gap-2">
        <Button>Adicionar nova tarefa</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar nova tarefa</DialogTitle>
          <DialogDescription>
            Adicione uma nova tarefa para ser realizada.
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-center">
              Tarefa
            </Label>
            <Input id="name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
          <Button type="submit" onClick={handleSaveChanges}>Salvar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    {checkboxes.map((checkbox) => (
      <div className="flex space-x-2 p-2" key={checkbox.id}>
        <Checkbox
          id={checkbox.id}
          checked={checkbox.checked}
          //@ts-expect-error
          onCheckedChange={(checked) => handleCheckboxChange(checkbox.id, checked)}
        />
        <label
          htmlFor={checkbox.id}
          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${checkbox.checked ? "line-through" : ""}`}
        >
          {checkbox.label}
        </label>
      </div>
    ))}
    </Card>
  </div>
  );
}
