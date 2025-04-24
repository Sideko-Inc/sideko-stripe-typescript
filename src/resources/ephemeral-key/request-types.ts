import { zodTransform } from "@sideko-inc/stripe/core";
import {
  EphemeralKeyCreateBody,
  External$EphemeralKeyCreateBody,
  Schemas$EphemeralKeyCreateBody,
} from "@sideko-inc/stripe/types/ephemeral-key-create-body";
import {
  EphemeralKeyDeleteBody,
  External$EphemeralKeyDeleteBody,
  Schemas$EphemeralKeyDeleteBody,
} from "@sideko-inc/stripe/types/ephemeral-key-delete-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data?: EphemeralKeyDeleteBody | undefined;
  key: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data?: External$EphemeralKeyDeleteBody | undefined;
  key: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$EphemeralKeyDeleteBody.in.optional(),
    key: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      key: "key",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    data: Schemas$EphemeralKeyDeleteBody.out.optional(),
    key: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      key: "key",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data?: EphemeralKeyCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$EphemeralKeyCreateBody | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$EphemeralKeyCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$EphemeralKeyCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
