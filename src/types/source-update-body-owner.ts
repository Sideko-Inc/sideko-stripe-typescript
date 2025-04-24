import {
  External$SourceUpdateBodyOwnerAddress,
  Schemas$SourceUpdateBodyOwnerAddress,
  SourceUpdateBodyOwnerAddress,
} from "./source-update-body-owner-address";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the owner of the payment instrument that may be used or required by particular source types.
 */
export type SourceUpdateBodyOwner = {
  address?: SourceUpdateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * @internal
 * SourceUpdateBodyOwner without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceUpdateBodyOwner = {
  address?: External$SourceUpdateBodyOwnerAddress | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceUpdateBodyOwner
 */
const SchemaIn$SourceUpdateBodyOwner: z.ZodType<
  SourceUpdateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$SourceUpdateBodyOwnerAddress.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceUpdateBodyOwner
 */
const SchemaOut$SourceUpdateBodyOwner: z.ZodType<
  External$SourceUpdateBodyOwner, // output type of this zod object
  z.ZodTypeDef,
  SourceUpdateBodyOwner // the object to be transformed
> = z
  .object({
    address: Schemas$SourceUpdateBodyOwnerAddress.out.optional(),
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

export const Schemas$SourceUpdateBodyOwner = {
  in: SchemaIn$SourceUpdateBodyOwner,
  out: SchemaOut$SourceUpdateBodyOwner,
};
