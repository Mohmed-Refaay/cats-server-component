"use client";

import { addCat } from "@/server/actions/cats";
import { FormControl, FormHelperText, Typography } from "@mui/joy";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { useFormState } from "react-dom";

export function AddCatForm() {
  const [state, formAction, isPending] = useFormState(addCat, {});

  const errors = {
    ...state?.errors?.fieldErrors,
  };

  return (
    <div>
      <Typography sx={{ textAlign: "center", mb: 5 }} level="h2" fontSize="xl">
        Add Cat
      </Typography>
      <form action={formAction}>
        <div className="flex flex-col gap-3 mb-5">
          <FormControl error={errors.name}>
            <Input type="text" name="name" placeholder="Name" />
            <FormHelperText>{errors.name}</FormHelperText>
          </FormControl>

          <FormControl error={errors.age}>
            <Input
              type="number"
              name="age"
              placeholder="Age"
              error={errors.age}
            />
            <FormHelperText>{errors.age}</FormHelperText>
          </FormControl>

          <FormControl error={errors.owner}>
            <Input
              type="text"
              name="owner"
              placeholder="Owner"
              error={errors.owner}
            />
            <FormHelperText>{errors.owner}</FormHelperText>
          </FormControl>
        </div>
        <Button type="submit" disabled={isPending} className="w-full">
          Add
        </Button>
      </form>
    </div>
  );
}
