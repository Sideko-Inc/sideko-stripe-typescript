import {
  External$TreasuryReceivedCredit,
  Schemas$TreasuryReceivedCredit,
  TreasuryReceivedCredit,
} from "./treasury-received-credit";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedCreditListResponse = {
  /**
   * Details about each object.
   */
  data: TreasuryReceivedCredit[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * TreasuryReceivedCreditListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedCreditListResponse = {
  data: External$TreasuryReceivedCredit[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedCreditListResponse
 */
const SchemaIn$TreasuryReceivedCreditListResponse: z.ZodType<
  TreasuryReceivedCreditListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$TreasuryReceivedCredit.in)),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedCreditListResponse
 */
const SchemaOut$TreasuryReceivedCreditListResponse: z.ZodType<
  External$TreasuryReceivedCreditListResponse, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedCreditListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$TreasuryReceivedCredit.out)),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$TreasuryReceivedCreditListResponse = {
  in: SchemaIn$TreasuryReceivedCreditListResponse,
  out: SchemaOut$TreasuryReceivedCreditListResponse,
};
