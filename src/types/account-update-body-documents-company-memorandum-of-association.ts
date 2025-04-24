import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation
 */
export type AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation
 */
const SchemaIn$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation: z.ZodType<
  AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation
 */
const SchemaOut$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation: z.ZodType<
  External$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation =
  {
    in: SchemaIn$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation,
    out: SchemaOut$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation,
  };
