import {
  CustomerBankAccountUpdateBodyOwnerAddress,
  External$CustomerBankAccountUpdateBodyOwnerAddress,
  Schemas$CustomerBankAccountUpdateBodyOwnerAddress,
} from "./customer-bank-account-update-body-owner-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBankAccountUpdateBodyOwner
 */
export type CustomerBankAccountUpdateBodyOwner = {
  address?: CustomerBankAccountUpdateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * @internal
 * CustomerBankAccountUpdateBodyOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBankAccountUpdateBodyOwner = {
  address?: External$CustomerBankAccountUpdateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBankAccountUpdateBodyOwner
 */
const SchemaIn$CustomerBankAccountUpdateBodyOwner: z.ZodType<
  CustomerBankAccountUpdateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$CustomerBankAccountUpdateBodyOwnerAddress.in.optional(),
    email: z.string().optional(),
    name: z.string().optional(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBankAccountUpdateBodyOwner
 */
const SchemaOut$CustomerBankAccountUpdateBodyOwner: z.ZodType<
  External$CustomerBankAccountUpdateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  CustomerBankAccountUpdateBodyOwner // the object to be transformed
> = z
  .object({
    address: Schemas$CustomerBankAccountUpdateBodyOwnerAddress.out.optional(),
    email: z.string().optional(),
    name: z.string().optional(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$CustomerBankAccountUpdateBodyOwner = {
  in: SchemaIn$CustomerBankAccountUpdateBodyOwner,
  out: SchemaOut$CustomerBankAccountUpdateBodyOwner,
};
