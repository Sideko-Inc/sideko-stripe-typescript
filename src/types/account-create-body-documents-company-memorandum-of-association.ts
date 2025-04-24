import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyDocumentsCompanyMemorandumOfAssociation
 */
export type AccountCreateBodyDocumentsCompanyMemorandumOfAssociation = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocumentsCompanyMemorandumOfAssociation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocumentsCompanyMemorandumOfAssociation
 */
const SchemaIn$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation: z.ZodType<
  AccountCreateBodyDocumentsCompanyMemorandumOfAssociation, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation
 */
const SchemaOut$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation: z.ZodType<
  External$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocumentsCompanyMemorandumOfAssociation // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation =
  {
    in: SchemaIn$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation,
    out: SchemaOut$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation,
  };
