"use server";

import { db } from "../datebase";
import { Cat, catSchema } from "../datebase/cats"
import { revalidatePath } from "next/cache";

export async function getCats(): Promise<Cat[]> {
	return new Promise((resolve, reject) => {
		db.all("SELECT * FROM Cats", (err, rows) => {
			if (err) {
				reject(err);
			} else {
				resolve(rows as Cat[]);
			}
		});
	});
}




export type AddCatFormData = Omit<Cat, "id">;

export async function addCat(_: any, form: FormData): Promise<any> {
	"use server";

	await new Promise((resolve) => setTimeout(resolve, 5000));

	const data: AddCatFormData = {
		name: form.get("name") as string,
		owner: form.get("owner") as string,
		age: Number(form.get("age")),
	};

	const result = catSchema.safeParse(data);

	if (!result.success) {
		return {
			message: "Invalid cat data",
			errors: result.error.flatten(),
		};
	}

	return new Promise((resolve, reject) => {
		db.run(
			"INSERT INTO Cats (name, owner, age) VALUES (?, ?, ?)",
			[data.name, data.owner, data.age],
			(err) => {
				if (err) {
					reject(err);
				} else {
					resolve({});
					revalidatePath("/");
				}
			}
		);
	});
}
