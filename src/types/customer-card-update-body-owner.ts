import {
  CustomerCardUpdateBodyOwnerAddress,
  External$CustomerCardUpdateBodyOwnerAddress,
  Schemas$CustomerCardUpdateBodyOwnerAddress,
} from "./customer-card-update-body-owner-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCardUpdateBodyOwner
 */
export type CustomerCardUpdateBodyOwner = {
  address?: CustomerCardUpdateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * @internal
 * CustomerCardUpdateBodyOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCardUpdateBodyOwner = {
  address?: External$CustomerCardUpdateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCardUpdateBodyOwner
 */
const SchemaIn$CustomerCardUpdateBodyOwner: z.ZodType<
  CustomerCardUpdateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$CustomerCardUpdateBodyOwnerAddress.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCardUpdateBodyOwner
 */
const SchemaOut$CustomerCardUpdateBodyOwner: z.ZodType<
  External$CustomerCardUpdateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  CustomerCardUpdateBodyOwner // the object to be transformed
> = z
  .object({
    address: Schemas$CustomerCardUpdateBodyOwnerAddress.out.optional(),
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

export const Schemas$CustomerCardUpdateBodyOwner = {
  in: SchemaIn$CustomerCardUpdateBodyOwner,
  out: SchemaOut$CustomerCardUpdateBodyOwner,
};
